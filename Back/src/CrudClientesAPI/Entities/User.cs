namespace CrudClientesAPI.Entities
{
    public class Usuario
    {
        public Usuario() { }
        
        public string Id { get; set; }
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfPassword { get; set; }
    }
}