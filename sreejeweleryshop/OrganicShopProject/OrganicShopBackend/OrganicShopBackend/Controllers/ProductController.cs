using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrganicShopBackend.Data;
using OrganicShopBackend.Models;
using OrganicShopBackend.Controllers;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Threading.Tasks;

namespace OrganicShopBackend.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly string _staticImagePath;

        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public ProductController(ApplicationDbContext context, IWebHostEnvironment hostEnvironment, IConfiguration configuration)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
            _staticImagePath = configuration["StaticImagePath"];
        }

        // GET: api/products

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();

            // Assign ImageSrc using a static image path
            var updatedProducts = products.Select(x => new Product
            {
                ProductId = x.ProductId,
                Title = x.Title,
                Description = x.Description,
                Price = x.Price,
                DiscountPercentage = x.DiscountPercentage,
                Rating = x.Rating,
                QuantityInStock = x.QuantityInStock,
                Sku = x.Sku,
                Weight = x.Weight,
                WarrantyInformation = x.WarrantyInformation,
                ShippingInformation = x.ShippingInformation,
                AvailabilityStatus = x.AvailabilityStatus,
                ReturnPolicy = x.ReturnPolicy,
                MinimumOrderQuantity = x.MinimumOrderQuantity,
                Images = x.Images,
                Thumbnail = x.Thumbnail,
                Category = x.Category,
                Tags = x.Tags,
                ImageSrc = _staticImagePath + x.ProductId + ".jpg",
            }).ToList();

            return Ok(updatedProducts);
        }

        // GET: api/products/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
                return NotFound();
            return Ok(product);
        }

        // POST: api/products
        [HttpPost]
        public async Task<IActionResult> PostProduct([FromForm] Product product)
        {
            if (product.ImageFile != null)
            {
                product.Thumbnail = await SaveImage(product.ImageFile);
            }
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return StatusCode(201);
        }

        // PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, [FromForm] Product product)
        {
            if (id != product.ProductId)
            {
                return BadRequest();
            }

            if (product.ImageFile != null)
            {
                DeleteImage(product.Thumbnail);
                product.Thumbnail = await SaveImage(product.ImageFile);
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            DeleteImage(product.Thumbnail);
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return Ok(product);
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
