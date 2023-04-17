namespace CrudClientesAPI.Entities
{
    public class Login
    {
        public Login()
        { }
        public string Id { get; set; }
        public string NomeCompleto { get; set; }
        public string Celular { get; set; }
        public string Email { get; set; }
        public DateTime? DataNascimento { get; set; }
        public int? CEP { get; set; }
        public string? Rua { get; set; }
        public string? Complemento { get; set; }
        public int? Numero { get; set; }
        public string? Estado { get; set; }
        public string? Naturalidade { get; set; }
        public string Password { get; set; }
        public string ConfirmePassword { get; set; }


    }
}