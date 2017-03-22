---
layout: post
name:   "Jekyll Tutorial"
comments: true
about:  "Parte 1"
type:   "article"
title:  "Jekyll Tutorial - Parte 1"
date:   2017-02-14 23:11:03
categories: Front-end
images:
  - url: /assets/img/jekylllogo.png
  - alt: jekyll basics
  - title: jekyll basics

---

## O que é Jekyll?   

Jekyll é um gerador de sites estáticos. Funciona assim:

Você tem o seu template e o seu conteúdo:

 >
  ![Jekyll template]({{ site.baseurl }}/assets/img/jekylltemplateandcontent.png "jekyll template")

O Jekyll pega o seu conteúdo e encaixa no seu template. E o resultado são páginas html estáticas independentes.

 >
  ![Jekyll build]({{ site.baseurl }}/assets/img/jekyllbuild.png "jekyll build")

O resultado da exportação Jekyll já é publicável! Agora é só publicar o seu site. Easy money easy life.

 >
  ![Jekyll publish]({{ site.baseurl }}/assets/img/jekyllpublish.png "jekyll publish")

O fluxo completo fica assim:
 >
  ![Jekyll flow]({{ site.baseurl }}/assets/img/jekyllflow.png "jekyll flow")


### Por que usar jekyll?

**1. Velocidade**
Jekyll não usa banco de dados, portanto, não precisa ficar chamando o banco a cada page request    

**2. Segurança**
Como não existe banco de dados, não há dados para serem roubados

**3. Pouca Manutenção**
Sem banco de dados, sem manutenção do banco de dados

**4. Github pages**
Sites gerados via Jekyll  são suportados pelo serviço github pages

**5. Suporta linguagem de marcação (markdown)**
Jekyll suporta posts escritos em markdown

**6. Barato**
Como não necessita banco de dados é uma serviço a menos para pagar, além, é claro, da hospedagem via github pages.

### Instalando Jekyll

Pra você que gosta de ctrl+c ctrl+v

 ```command
 gem install jekyll bundler
 ```
 ```command
 jekyll -v
 ```
```command
 jekyll new jekyll-helloworld
 ```
```command
 jekyll serve
 ```

#### Detalhes da instalação

Para instalar o jekyll você precisa ter ruby instalado. Para instalar ruby clique aqui.

 Com o ruby instalado rode os seguintes comandos:

 Instalação jekyll:
 ```command
 gem install jekyll bundler
 ```
 >
  ![teste]({{ site.baseurl }}/assets/img/jekylldownload.gif "jekyll download")

Se tudo deu certo, você deve ver a versão do jekyll com o comando abaixo
 ```command
 jekyll -v
 ```
 >
  ![teste]({{ site.baseurl }}/assets/img/jekyllversion.png "jekyll version")

Iniciando um novo projeto
```command
 jekyll new jekyll-helloworld
 ```

>
 ![teste]({{ site.baseurl }}/assets/img/jekyllnew.png "jekyll new")

Após iniciar um novo projeto, é só subir o servidor local. O servidor local simula um servidor web no seu computador, ou seja, é como se o site estivesse hospedado no seu próprio computador. Para subir o servidor execute:

```command
 jekyll serve
 ```
 >
  ![jekyll serve]({{ site.baseurl }}/assets/img/jekyllserve.gif "jekyll serve")  

Agora o servidor jekyll pode ser acessado através do endereço **localhost:4000**
