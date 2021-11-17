INSERT INTO tb_petshop(cnpj,telefone,endereco) VALUES (11111111111111,1141424142,'Rua Santos');

INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Sadraque Bezerra',11111111111,11911111111);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Karen Hellen',22222222222,11922222222);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Matheus Farkas',33333333333,11933333333);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Marcos Silva',44444444444,11944444444);
INSERT INTO tb_cliente(petshop_id,name,cpf,telefone) VALUES (1,'Wilton Oliveira',55555555555,11955555555);

INSERT INTO tb_animal(cliente_id,clientes,name,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (1,'Sadraque Bezerra','Bolinha','Cachorro','2017-03-23','Yorkshire','5.0 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,animal,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (2,'Karen Hellen','Lady','Gato','2018-03-12','Persa','6.5 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,animal,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (3,'Matheus Farkas','Rau','Gato','2020-08-05','Siamês','4.2 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,animal,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (4,'Marcos Silva','Fredy','Cachorro','2017-03-02','Buldogue','10.0 kg','Sim','2021-11-12','Sim');
INSERT INTO tb_animal(cliente_id,clientes,animal,especie,nascimento,raca,peso,vacinado,registro,castrado) VALUES (5,'Wilton Oliveira','Paçoca','Cachorro','2017-05-23','Labrador Retriever','30.5 kg','Sim','2021-11-12','Sim');

INSERT INTO tb_veterinario(nome,crmv,petshop_id) VALUES ('Monique rodrigues',1111,1);

INSERT INTO tb_alimentacao(cliente_id,veterinario_id,alimentacao,animal,mes,quantidade) VALUES (1,1,'Somente ração','Bolinha','Agosto','200g por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,animal,mes,alimentacao,quantidade) VALUES (2,1,'Lady','Agosto','Somente ração','50g por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,animal,mes,alimentacao,quantidade) VALUES (3,1,'Rau','Agosto','Somente ração','60g por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,animal,mes,alimentacao,quantidade) VALUES (4,1,'Fredy','Agosto','Somente ração','1 kg por dia');
INSERT INTO tb_alimentacao(cliente_id,veterinario_id,animal,mes,alimentacao,quantidade) VALUES (5,1,'Paçoca','Agosto','Somente ração','1 kg por dia');