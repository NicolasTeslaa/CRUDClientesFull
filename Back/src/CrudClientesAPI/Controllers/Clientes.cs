using CrudClientesAPI.Context;
using CrudClientesAPI.Entities;
using CrudClientesAPI.Entities.Models;
using Microsoft.AspNetCore.Mvc;

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
        var cliente = _context.Clientes.FirstOrDefault(c => c.Id == id);

        if (cliente == null) return NotFound();

        return Ok(cliente);

    }

    [HttpPost("Create")]
    public async Task<IActionResult> Create([FromBody] ClienteCreateModel cliente)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var novoCliente = new Cliente
        {
            Id = Guid.NewGuid().ToString(),
            Celular = cliente.Celular,
            CPF = cliente.CPF,
            DataNascimento = cliente.DataNascimento,
            Email = cliente.Email,
            NomeCompleto = cliente.NomeCompleto,
        };

        _context.Clientes.Add(novoCliente);

        await _context.SaveChangesAsync();

        return Ok();
    }


    [HttpDelete("Delete/{id}")]
    public IActionResult Delete(string id)
    {

        var cliente = _context.Clientes.Find(id);

        if (cliente == null) return NotFound();

        _context.Clientes.Remove(cliente);

        _context.SaveChanges();

        return Ok();
    }
    [HttpPut("Update")]
    public async Task<IActionResult> Update(string id, [FromBody] ClienteUpdateModel cliente)
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