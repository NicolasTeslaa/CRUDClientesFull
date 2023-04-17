using CrudClientesAPI.Context;
using CrudClientesAPI.Entities;
using CrudClientesAPI.Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace CrudClientes.Controllers;
[ApiController]
[Route("api/[controller]")]
public class Login : ControllerBase
{
    private readonly Context _context;
    public Login(Context context)
    {
        _context = context;
    }
    private readonly Context context;
    [HttpGet("GetUsuario")]
    public ActionResult<Login> GetUsuario(string id)
    {
        var user = _context.Users.FirstOrDefault(c => c.Id == id);
        if (user == null)
        {
            return NotFound();
        }
        return user;
    }

    [HttpPost("CreateUser")]
    public async Task<IActionResult> Create([FromBody] LoginCreateModel user)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var novoUser = new user
        {
            Id = Guid.NewGuid().ToString(),
            Celular = user.Celular,
            Email = user.Email,
            DataNascimento = user.DataNascimento,
            NomeCompleto = user.NomeCompleto,
        };

        _context.Users.Add(novoUser);

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpDelete("DeleteUser/{id}")]
    public IActionResult Delete(string id)
    {

        var user = _context.Users.Find(id);

        if (user == null) return NotFound();

        _context.Users.Remove(user);

        _context.SaveChanges();

        return Ok();
    }
    [HttpPut("UpdateUser/{id}")]
    public async Task<IActionResult> Update(string id, [FromBody] LoginUpdateModel user)
    {
        var userExistente = await _context.Users.FindAsync(id);

        if (userExistente == null)
        {
            return NotFound();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        userExistente.Celular = user.Celular;
        userExistente.Email = user.Email;
        userExistente.DataNascimento = user.DataNascimento;
        userExistente.NomeCompleto = user.NomeCompleto;

        await _context.SaveChangesAsync();

        return Ok();
    }
}