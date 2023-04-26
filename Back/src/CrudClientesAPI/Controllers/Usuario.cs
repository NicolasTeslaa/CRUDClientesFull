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
    public IEnumerable<Usuario> Get()
    {
        return _context.Usuarios;
    }
    [HttpGet("GetById/{id}")]
    public ActionResult<Usuario> GetById(string id)
    {
        var usuario = _context.Usuarios.FirstOrDefault(c => c.Id == id);
        if (usuario == null)
        {
            return BadRequest(404);
        }
        return usuario;
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


    [HttpPut("Update/{id}")]
    public async Task<IActionResult> Update(string id, [FromBody] UserUpdateModel usuario)
    {
        var clienteExistente = await _context.Clientes.FindAsync(id);

        if (clienteExistente == null)
        {
            return NotFound();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        clienteExistente.Celular = cliente.Celular;
        clienteExistente.CPF = cliente.CPF;
        clienteExistente.DataNascimento = cliente.DataNascimento;
        clienteExistente.Email = cliente.Email;
        clienteExistente.NomeCompleto = cliente.NomeCompleto;

        await _context.SaveChangesAsync();

        return Ok();
    }
}