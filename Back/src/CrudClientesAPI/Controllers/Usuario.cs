using CrudClientesAPI.Context;
using CrudClientesAPI.Entities;
using CrudClientesAPI.Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace CrudClientes.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly Context _context;
    public UsuarioController(Context context)
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
        var usuarioExistente = await _context.Usuarios.FindAsync(id);

        if (usuarioExistente == null)
        {
            return NotFound();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        usuarioExistente.Email = usuario.Email;
        usuarioExistente.NomeCompleto = usuario.NomeCompleto;
        usuarioExistente.Password = usuario.Password;
        usuarioExistente.ConfPassword = usuario.ConfPassword;

        await _context.SaveChangesAsync();

        return Ok();
    }
    [HttpDelete("Delete/{id}")]
    public IActionResult Delete(string id)
    {
        var usuario = _context.Usuarios.Find(id);

        if (usuario == null) return NotFound();

        _context.Usuarios.Remove(usuario);

        _context.SaveChanges();

        return Ok();
    }
}