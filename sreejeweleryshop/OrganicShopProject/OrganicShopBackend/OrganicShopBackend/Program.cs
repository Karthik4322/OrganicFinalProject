using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OrganicShopBackend.Data;
using OrganicShopBackend.Services;
using System.Text;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using OrganicShopBackend.Controllers;
using Microsoft.Extensions.FileProviders; // Required for serving static files
using Microsoft.AspNetCore.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Configure CORS (allow all origins, methods, and headers)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.WithOrigins("http://localhost:3000") // Ensure this matches your frontend
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});


// Configure Database connection using MySQL
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 40)), // Specify your MySQL server version
        mySqlOptions => mySqlOptions
            .EnableRetryOnFailure(
                maxRetryCount: 5,
                maxRetryDelay: TimeSpan.FromSeconds(30),
                errorNumbersToAdd: null)
    ));

// JWT Authentication configuration
var key = Encoding.ASCII.GetBytes(builder.Configuration["Jwt:Key"]);
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero // No expiration buffer
        };
    });

// Register services
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<ProductController>();

var app = builder.Build();

// Configure Middleware
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

// Enable CORS
app.UseCors("AllowAll");

// Enable authentication and authorization middleware
app.UseAuthentication();
app.UseAuthorization();

// ✅ Serve static files (Images folder) from the root directory
var imagePath = Path.Combine(app.Environment.ContentRootPath, "Images");
if (!Directory.Exists(imagePath))
{
    Directory.CreateDirectory(imagePath); // Ensure Images folder exists
}

app.UseHttpsRedirection();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(imagePath),
  //  (Path.Combine(env.ContentRootPath, "Images")),
    RequestPath = "/Images"
});

// Map controllers for routing
app.MapControllers();
app.UseStaticFiles(); // Enable serving static files
app.UseRouting();
app.UseAuthorization();
app.Run();
