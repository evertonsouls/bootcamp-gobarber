# Recuperaçao de senha

**RF**
> Requisitos Funcionais

- O usuario deve poder recuperar sua senha informando seu e-mail;
- O usuario deve receber um e-mail com instruçoes de recuperaçao de senha;
- O usuario deve poder resetar sua senha;

**RFN**
> Requisitos Nao Funcionais

- Utilizar Mailtrap para testear envio em ambiente de dev;
- Utilizar Amazon SES para envios em produçao;
- O envio de email deve acontecer em segundo plano (background job);

**RN**
> Regras de Negocio

- O Link enviado por email para resetear senha, seve expirar en 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atualizaçao do perfil

**RF**

- O usuario deve poder atualizar seu nome, email, e senha

**RN**

- O usuario nao pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualiza sua senha, o usuario deve confirmar a nova senha

# Painel do prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificaçao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificaçoes nao lidas;

**RNF**

- Os agendamentos do prestador no dia deve ser armazenado sem cache;
- As notificaçoes do prestador devem ser armazenadas no MongoDB;
- As notificaçoes devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificaçao deve ter um status de lida ou nao-lida para que o prestador possa controler;


# Agendamento de serviços

**RF**

- O usuario deve poder listar todos prestadores de serviço cadastrados;
- O usuario deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuario deve poder listar horários disponíveis em um dia específico de um prestados;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;


**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primero às 8h, último às 17h)
- O usuario nao pode agendar em um horário já ocupado;
- O usuario nao pode agendar em um horário que já passou;
- O usuario nao pode agendar serviços consigo mesmo;
