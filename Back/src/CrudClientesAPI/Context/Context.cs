using CrudClientesAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace CrudClientesAPI.Context
{
    public class Context : DbContext
    {
        public Context(){}

        public Context(DbContextOptions<Context> options) : base(options){

        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Cliente> Users { get; set; }

    }
}