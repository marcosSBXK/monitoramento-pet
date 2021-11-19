create table tb_alimentacao (id_alimentacao int8 generated by default as identity, alimentacao varchar(255), animal varchar(255), mes varchar(255), quantidade varchar(255), cliente_id int8, veterinario_id int8, primary key (id_alimentacao));
create table tb_animal (id_animal int8 generated by default as identity, castrado varchar(255), clientes varchar(255), especie varchar(255), name varchar(255), nascimento date, peso varchar(255), raca varchar(255), registro date, vacinado varchar(255), cliente_id int8, primary key (id_animal));
create table tb_cliente (id int8 generated by default as identity, cpf int8, name varchar(255), telefone int8, petshop_id int8, primary key (id));
create table tb_petshop (id_petshop int8 generated by default as identity, cnpj int8, endereco varchar(255), telefone int8, primary key (id_petshop));
create table tb_veterinario (id int8 generated by default as identity, crmv int8, nome varchar(255), petshop_id int8, primary key (id));
alter table if exists tb_alimentacao add constraint FK4s4eftyj2er60txnwhe9wqeke foreign key (cliente_id) references tb_cliente;
alter table if exists tb_alimentacao add constraint FK6mo7bam1tfucd4fubnpwvdpid foreign key (veterinario_id) references tb_veterinario;
alter table if exists tb_animal add constraint FKtaa1gus9muu722g45u729mv9l foreign key (cliente_id) references tb_cliente;
alter table if exists tb_cliente add constraint FKddyqgeqji67gb2gtjne64lcc8 foreign key (petshop_id) references tb_petshop;
alter table if exists tb_veterinario add constraint FKq6jn2wpi0dg9epysyr8v7lm39 foreign key (petshop_id) references tb_petshop;
INSERT INTO tb_petshop(cnpj,telefone,endereco) VALUES (11111111111111,1141424142,'Rua Santos');
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Sadraque Bezerra',11111111111,11911111111);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Karen Hellen',22222222222,11922222222);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Matheus Farkas',33333333333,11933333333);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Marcos Silva',44444444444,11944444444);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Wilton Oliveira',55555555555,11955555555);
INSERT INTO tb_animal(cliente_id,clientes,name,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (1,'Sadraque Bezerra','Bolinha','Cachorro','2017-03-23','Yorkshire','5.0 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,name,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (2,'Karen Hellen','Lady','Gato','2018-03-12','Persa','6.5 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,name,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (3,'Matheus Farkas','Rau','Gato','2020-08-05','Siamês','4.2 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,name,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (4,'Marcos Silva','Fredy','Cachorro','2017-03-02','Buldogue','10.0 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,name,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (5,'Wilton Oliveira','Paçoca','Cachorro','2017-05-23','Labrador Retriever','30.5 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_veterinario(nome,crmv,petshop_id) VALUES ('Monique rodrigues',1111,1);
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,alimentacao,animal,mes,quantidade) VALUES (1,1,'Somente ração','Bolinha','Agosto','200g por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,alimentacao,animal,mes,quantidade) VALUES (2,1,'Somente ração','Lady','Agosto','50g por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,alimentacao,animal,mes,quantidade) VALUES (3,1,'Somente ração','Rau','Agosto','60g por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,alimentacao,animal,mes,quantidade) VALUES (4,1,'Somente ração','Fredy','Agosto','1 kg por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,alimentacao,animal,mes,quantidade) VALUES (5,1,'Somente ração','Paçoca','Agosto','1 kg por dia');
