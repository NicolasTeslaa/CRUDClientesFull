using CrudClientesAPI.Context;
using CrudClientesAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CrudClientes.Controllers;

[ApiController]
[Route("api/[controller]")]
public class Clientes : ControllerBase
{
    private readonly Context _context;
    public Clientes(Context context)
    {
        _context = context;
    }

    private readonly Context context;

    [HttpGet("GetAllClientes")]
    public IEnumerable<Cliente> Get()
    {
        return _context.Clientes;
    }

    [HttpGet("GetById/{id}")]
    public Cliente GetById(string id)
    {
        return context.Clientes.FirstOrDefault(
            cliente => cliente.Id == id
        );
    }

    [HttpPost("Create")]
public async Task<IActionResult> Create( [FromBody] Cliente cliente)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Clientes.Add(cliente);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = cliente.Id  }, cliente);
    }


    [HttpDelete("Delete")]
    public string Delete()
    {
        return "Exemplo de Post";
    }
    [HttpPut("Update")]
    public string Put()
    {
        return "Exemplo de Post";
    }
}
