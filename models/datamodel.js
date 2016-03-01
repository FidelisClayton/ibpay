module.exports  = function(app) {
	var model = {
	  "analyst": "julio",
	  "theme": "test",
	  "version": "0.1",
	  "nextEntityUID": "6",
	  "groups": {
	    "sesad:almoxarifado": {
	      "pessoal": {
	        "asDefined": "",
	        "Pessoa": {
	          "asDefined": "",
	          "uid": "0",
	          "package": "br.gov.rn.parnamirim.datasource.domain.pessoal",
	          "name": "",
	          "mode": "aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "",
	          "view": {
	            "title": "Pessoa"
	          },
	          "data": {
	            "schema": "pessoal",
	            "table": "pessoa",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": ""
	          },
	          "attributes": {
	            "asDefined": "",
	            "id": {
	              "asDefined": "",
	              "uid": "0.0.0",
	              "name": "",
	              "type": "Long",
	              "data": {
	                "name": "",
	                "type": "bigserial",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": true
	              },
	              "view": {
	                "title": "--",
	                "readOnly": true,
	                "show": false,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Pessoais"
	              }
	            },
	            "nome": {
	              "asDefined": "",
	              "uid": "0.0.1",
	              "name": "",
	              "type": "String",
	              "data": {
	                "name": "",
	                "type": "character varying",
	                "length": "120",
	                "notNull": true,
	                "unique": false,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Nome",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Pessoais"
	              }
	            }
	          }
	        },
	        "PessoaFisica": {
	          "asDefined": "",
	          "uid": "1",
	          "package": "br.gov.rn.parnamirim.datasource.domain.pessoal",
	          "name": "",
	          "mode": "aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "br.gov.rn.parnamirim.datasource.domain.pessoal.Pessoa",
	          "view": {
	            "title": "PessoaFisica"
	          },
	          "data": {
	            "schema": "pessoal",
	            "table": "pessoa_fisica",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": ""
	          },
	          "attributes": {
	            "asDefined": "",
	            "sexo": {
	              "asDefined": "",
	              "uid": "1.0.0",
	              "name": "",
	              "type": "Boolean",
	              "data": {
	                "name": "",
	                "type": "boolean",
	                "length": "",
	                "notNull": true,
	                "unique": false,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Sexo",
	                "readOnly": false,
	                "show": true,
	                "showAs": "select",
	                "defaultValue": "Masculino,Feminino",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Pessoais"
	              }
	            }
	          }
	        }
	      },
	      "cidadao": {
	        "asDefined": "",
	        "Cidadao": {
	          "asDefined": "",
	          "uid": "2",
	          "package": "br.gov.rn.parnamirim.datasource.domain.pessoal",
	          "name": "",
	          "mode": "master aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "br.gov.rn.parnamirim.datasource.domain.pessoal.PessoaFisica",
	          "view": {
	            "title": "Cidad&atilde;o"
	          },
	          "data": {
	            "schema": "pessoal",
	            "table": "cidadao",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": ""
	          },
	          "attributes": {
	            "asDefined": "",
	            "cpf": {
	              "asDefined": "",
	              "uid": "2.0.0",
	              "name": "",
	              "type": "String",
	              "data": {
	                "name": "",
	                "type": "character varying",
	                "length": "16",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "CPF",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Pessoais"
	              }
	            }
	          }
	        },
	        "TipoDeContato": {
	          "asDefined": "",
	          "uid": "3",
	          "package": "br.gov.rn.parnamirim.datasource.domain.pessoal",
	          "name": "",
	          "mode": "aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "",
	          "view": {
	            "title": "Tipo de Contato"
	          },
	          "data": {
	            "schema": "pessoal",
	            "table": "tipo_de_contato",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": ""
	          },
	          "attributes": {
	            "asDefined": "",
	            "id": {
	              "asDefined": "",
	              "uid": "3.0.0",
	              "name": "",
	              "type": "Long",
	              "data": {
	                "name": "",
	                "type": "bigserial",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": true
	              },
	              "view": {
	                "title": "--",
	                "readOnly": true,
	                "show": false,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Contato"
	              }
	            },
	            "tipo": {
	              "asDefined": "",
	              "uid": "3.0.1",
	              "name": "",
	              "type": "String",
	              "data": {
	                "name": "",
	                "type": "character varying",
	                "length": "20",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Tipo",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Contato"
	              }
	            }
	          }
	        },
	        "Contato": {
	          "asDefined": "",
	          "uid": "4",
	          "package": "br.gov.rn.parnamirim.datasource.domain.pessoal",
	          "name": "",
	          "mode": "aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "",
	          "view": {
	            "title": "Contato"
	          },
	          "data": {
	            "schema": "pessoal",
	            "table": "contato",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": "",
	            "cidadao": {
	              "asDefined": "",
	              "uid": "4.1.0",
	              "name": "cidadao",
	              "references": "br.gov.rn.parnamirim.datasource.domain.pessoal.Cidadao[contatos]",
	              "view": {},
	              "data": {
	                "name": "cidadao_id",
	                "references": {
	                  "schema": "pessoal",
	                  "table": "cidadao",
	                  "attribute": "id"
	                },
	                "type": "bigint",
	                "notNull": true,
	                "unique": false,
	                "delete": "cascade",
	                "update": "cascade"
	              }
	            },
	            "tipoDeContato": {
	              "asDefined": "",
	              "uid": "4.1.1",
	              "name": "tipoDeContato",
	              "references": "br.gov.rn.parnamirim.datasource.domain.pessoal.TipoDeContato[contatos]",
	              "view": {},
	              "data": {
	                "name": "tipo_de_contato_id",
	                "references": {
	                  "schema": "pessoal",
	                  "table": "tipo_de_contato",
	                  "attribute": "id"
	                },
	                "type": "bigint",
	                "notNull": true,
	                "unique": false,
	                "delete": "cascade",
	                "update": "cascade"
	              }
	            }
	          },
	          "attributes": {
	            "asDefined": "",
	            "id": {
	              "asDefined": "",
	              "uid": "4.0.0",
	              "name": "",
	              "type": "Long",
	              "data": {
	                "name": "",
	                "type": "bigserial",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": true
	              },
	              "view": {
	                "title": "--",
	                "readOnly": true,
	                "show": false,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Contato"
	              }
	            },
	            "contato": {
	              "asDefined": "",
	              "uid": "4.0.1",
	              "name": "",
	              "type": "String",
	              "data": {
	                "name": "",
	                "type": "character varying",
	                "length": "12",
	                "notNull": true,
	                "unique": false,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Número",
	                "readOnly": false,
	                "show": true,
	                "showAs": "multiple select, data preloaded",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Contato"
	              }
	            }
	          }
	        }
	      },
	      "funcionario": {
	        "asDefined": "",
	        "Cidadao": {
	          "asDefined": "sesad:almoxarifado.cidadao",
	          "uid": "2",
	          "package": "br.gov.rn.parnamirim.datasource.domain.pessoal",
	          "name": "",
	          "mode": "master aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "br.gov.rn.parnamirim.datasource.domain.pessoal.PessoaFisica",
	          "view": {
	            "title": "Cidad&atilde;o"
	          },
	          "data": {
	            "schema": "pessoal",
	            "table": "cidadao",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": ""
	          },
	          "attributes": {
	            "asDefined": "sesad:almoxarifado.cidadao.Cidadao",
	            "cpf": {
	              "asDefined": "sesad:almoxarifado.cidadao.Cidadao",
	              "uid": "",
	              "name": "",
	              "type": "",
	              "data": {
	                "name": "",
	                "type": "",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "CPF",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Pessoais"
	              }
	            }
	          }
	        },
	        "TipoDeContato": {
	          "asDefined": "sesad:almoxarifado.cidadao",
	          "uid": "3",
	          "package": "",
	          "name": "",
	          "mode": "aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "",
	          "view": {
	            "title": ""
	          },
	          "data": {
	            "schema": "",
	            "table": "",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": "sesad:almoxarifado.cidadao.TipoDeContato"
	          },
	          "attributes": {
	            "asDefined": "sesad:almoxarifado.cidadao.TipoDeContato",
	            "id": {
	              "asDefined": "sesad:almoxarifado.cidadao.TipoDeContato",
	              "uid": "",
	              "name": "",
	              "type": "",
	              "data": {
	                "name": "",
	                "type": "",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": true
	              },
	              "view": {
	                "title": "--",
	                "readOnly": true,
	                "show": false,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Tipo de Contato"
	              }
	            },
	            "tipo": {
	              "asDefined": "sesad:almoxarifado.cidadao.TipoDeContato",
	              "uid": "",
	              "name": "",
	              "type": "",
	              "data": {
	                "name": "",
	                "type": "",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Tipo",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Tipo de Contato"
	              }
	            }
	          }
	        },
	        "Contato": {
	          "asDefined": "sesad:almoxarifado.cidadao",
	          "uid": "",
	          "package": "",
	          "name": "",
	          "mode": "aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "",
	          "view": {
	            "title": ""
	          },
	          "data": {
	            "schema": "",
	            "table": "",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": "sesad:almoxarifado.cidadao.Contato",
	            "cidadao": {
	              "asDefined": "sesad:almoxarifado.cidadao.Contato",
	              "uid": "",
	              "name": "",
	              "references": "",
	              "view": {},
	              "data": {
	                "name": "cidadao_id",
	                "references": {
	                  "schema": "",
	                  "table": "",
	                  "attribute": ""
	                },
	                "type": "",
	                "notNull": true,
	                "unique": false,
	                "delete": "",
	                "update": ""
	              }
	            },
	            "tipoDeContato": {
	              "asDefined": "sesad:almoxarifado.cidadao.Contato",
	              "uid": "",
	              "name": "",
	              "references": "",
	              "view": {},
	              "data": {
	                "name": "",
	                "references": {
	                  "schema": "",
	                  "table": "",
	                  "attribute": ""
	                },
	                "type": "",
	                "notNull": true,
	                "unique": false,
	                "delete": "",
	                "update": ""
	              }
	            }
	          },
	          "attributes": {
	            "asDefined": "sesad:almoxarifado.cidadao.Contato",
	            "id": {
	              "asDefined": "sesad:almoxarifado.cidadao.Contato",
	              "uid": "4.0.6",
	              "name": "",
	              "type": "",
	              "data": {
	                "name": "",
	                "type": "",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": true
	              },
	              "view": {
	                "title": "--",
	                "readOnly": true,
	                "show": false,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Contato"
	              }
	            },
	            "contato": {
	              "asDefined": "sesad:almoxarifado.cidadao.Contato",
	              "uid": "",
	              "name": "",
	              "type": "",
	              "data": {
	                "name": "",
	                "type": "",
	                "length": "",
	                "notNull": true,
	                "unique": false,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Número",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Contato"
	              }
	            },
	            "uso": {
	              "asDefined": "",
	              "uid": "4.0.2",
	              "name": "",
	              "type": "String",
	              "data": {
	                "name": "",
	                "type": "character varying",
	                "length": "12",
	                "notNull": true,
	                "unique": false,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Uso",
	                "readOnly": false,
	                "show": true,
	                "showAs": "multiple select, data preloaded",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Contato"
	              }
	            }
	          }
	        },
	        "Funcionario": {
	          "asDefined": "",
	          "uid": "5",
	          "package": "br.gov.rn.parnamirim.datasource.domain.pessoal",
	          "name": "",
	          "mode": "master aggregate",
	          "readOnly": false,
	          "abstract": false,
	          "inherits": "",
	          "view": {
	            "title": "Funcion&aacute;rio"
	          },
	          "data": {
	            "schema": "pessoal",
	            "table": "funcionario",
	            "inherits": {
	              "schema": "",
	              "table": "",
	              "pk": ""
	            }
	          },
	          "associations": {
	            "asDefined": "",
	            "cidadao": {
	              "asDefined": "",
	              "uid": "5.1.0",
	              "name": "cidadao",
	              "references": "br.gov.rn.parnamirim.datasource.domain.pessoal.Cidadao[funcionarios]",
	              "view": {},
	              "data": {
	                "name": "cidadao_id",
	                "references": {
	                  "schema": "pessoal",
	                  "table": "cidadao",
	                  "attribute": "id"
	                },
	                "type": "bigint",
	                "notNull": true,
	                "unique": false,
	                "delete": "cascade",
	                "update": "cascade"
	              }
	            }
	          },
	          "attributes": {
	            "asDefined": "",
	            "id": {
	              "asDefined": "",
	              "uid": "5.0.0",
	              "name": "",
	              "type": "Long",
	              "data": {
	                "name": "",
	                "type": "bigserial",
	                "length": "",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": true
	              },
	              "view": {
	                "title": "--",
	                "readOnly": true,
	                "show": false,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Empregaticios"
	              }
	            },
	            "matricula": {
	              "asDefined": "",
	              "uid": "5.0.1",
	              "name": "",
	              "type": "String",
	              "data": {
	                "name": "",
	                "type": "character varying",
	                "length": "20",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Matricula",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Empregaticios"
	              }
	            },
	            "nct": {
	              "asDefined": "",
	              "uid": "5.0.2",
	              "name": "",
	              "type": "String",
	              "data": {
	                "name": "",
	                "type": "character varying",
	                "length": "20",
	                "notNull": true,
	                "unique": true,
	                "primaryKey": false
	              },
	              "view": {
	                "title": "Nct",
	                "readOnly": false,
	                "show": true,
	                "showAs": "text",
	                "defaultValue": "",
	                "width": "",
	                "mask": "",
	                "segment": "Dados Empregaticios"
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	};
	return model
}