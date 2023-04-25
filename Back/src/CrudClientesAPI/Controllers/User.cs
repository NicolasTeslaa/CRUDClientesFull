using CrudClientesAPI.Context;
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
    public IEnumerable<User>Get(){
        return (IEnumerable<User>)_context.Usuarios;
    }
}