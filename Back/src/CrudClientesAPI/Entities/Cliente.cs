namespace CrudClientesAPI.Entities
{
    public class Cliente 
    {
        public Cliente()
        {

        }
        public string Id { get; set; }
        public string NomeCompleto { get; set; }
        public string CPF { get; set; }
        public string Celular { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
    }
}