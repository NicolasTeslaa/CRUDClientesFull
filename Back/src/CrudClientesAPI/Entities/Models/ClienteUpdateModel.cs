using System.ComponentModel.DataAnnotations;


namespace CrudClientesAPI.Entities.Models
{
    public class ClienteUpdateModel
    {
        public ClienteUpdateModel()
        {

        }
        [Required(ErrorMessage = "Informe um ID válido ")]
        public string Id { get; set; }
        [Required(ErrorMessage = "Informe o nome completo ")]
        public string NomeCompleto { get; set; }
        [Required(ErrorMessage = "Informe o CPF")]
        public string CPF { get; set; }
        [Required(ErrorMessage = "Informe o Celular")]
        public string Celular { get; set; }
        [Required(ErrorMessage = "Cadastre o email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Insira a Data de Nascimento")]
        public DateTime DataNascimento { get; set; }
    }
}