using CrudClientesAPI.Context;
using CrudClientesAPI.Entities;
using CrudClientesAPI.Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace CrudClientes.Controllers;

[ApiController]
[Route("api/[controller]")]
public class User : ControllerBase
{
    private readonly Context _context;
    public User(Context context)
    {
        _context = context;
    }
    private readonly Context context;

    [HttpGet("GetAllUsuarios")]
    public IEnumerable<User> Get()
    {
        return (IEnumerable<User>)_context.Usuarios;
    }
    [HttpPost("Create")]
    public async Task<IActionResult> Create([FromBody] UserCreateModel usuario)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var novoUsuario = new Usuario
        {
            Id = Guid.NewGuid().ToString(),
            Email = usuario.Email,
            NomeCompleto = usuario.NomeCompleto,
            Password = usuario.Password,
            ConfPassword = usuario.ConfPassword
        };

        _context.Usuarios.Add(novoUsuario);

        await _context.SaveChangesAsync();

        return Ok();
    }
}