using Microsoft.AspNetCore.Mvc;
using OrganicShopBackend.Models;
using OrganicShopBackend.Services;
using System.Threading.Tasks;

namespace OrganicShopBackend.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest model)
        {
            var token = await _authService.AuthenticateUser(model.Email, model.Password);
            if (token == null)
                return Unauthorized(new { Message = "Invalid credentials" });

            return Ok(new { Token = token });
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] SignupRequest model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.RegisterUser(model);
            if (!result)
                return BadRequest(new { Message = "User registration failed: Email might already be in use." });

            return Ok(new { Message = "User registered successfully" });
        }
    }
}