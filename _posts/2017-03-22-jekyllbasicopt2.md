---
layout: post
name:   "Jekyll - Parte 2"
comments: true
about:  "Tutorial"
type:   "article"
title:  "Jekyll - Parte 2"
date:   2017-03-20 23:11:03
description: Tutorial Jekyll como instalar e usar jekyll para seu blog ou site
categories: 
  - tecnologia 
  - jekyll 
  - web
images:
  - url: /assets/img/jekylllogo.png
  - alt: jekyll basics
  - title: jekyll basics
social:
  name: Edian Comachio
  links:
    - https://www.facebook.com/edian.comachio    
    - https://www.linkedin.com/in/edian-comachio-4074b213b/    
    - https://github.com/ecomachio    
---

## Estrutura e Funcionamento

[Na parte 1 do tutorial Jekyll aprendemos a o que é o jekyll e como instalar.]({{ site.baseurl }}/tecnologia/jekyll/web/2017/03/21/jekyllbasico.html)

Agora vamos conhecer a estrutura e o funcionamento do jekyll.

### Estrutura

A última parte do tutorial anterior subimos o servidor jekyll através do comando:

```command
 jekyll serve
 ```

O servidor está acessivel através do endereço localhost:4000 e deve estar parecido com isso:

>
 ![jekylllocalhost]({{ site.baseurl }}/assets/img/jekylllocalhost.png "jekyll localhost")

O comando **jekyll new** gera a seguinte estrutura de pastas:

>
 ![jekyllstructure]({{ site.baseurl }}/assets/img/jekyllstructure.png "jekyll structure")

#### Coisas importantes:

**_config.yml** - Arquivo de configuração. As configurações do jekyll podem ser consultadas [aqui](https://jekyllrb.com/docs/configuration/)

**_incluides** - O direitorio includes permite o desenvolvimento modularizado do site. Os arquivos html, criados nessa pasta, viram módulos que podem ser incluidos em layouts e posts através da tag:
 
```command
{{ "{% include footer.html " }}%} 
```

**_layouts** - Templates para os posts. Os arquivos da pasta layout serão onde os posts serão incluidos. O conteudo dos posts são impressos no layout através da tag: 

```command
{{ "{{ content " }}}} 
``` 

**_posts** - Aqui vai o seu conteúdo dinamico. Podem ser escritos em html ou [markdown](http://blog.da2k.com.br/2015/02/08/aprenda-markdown/). O nome dos arquivos posts devem seguir o padrão abaixo:

```command
YEAR-MONTH-DAY-title.MARKUP

2017-03-31-NomeDoPost.md
``` 


**_site** - Aqui não pode mexer. Nesse diretorio é onde o jekyll joga o resultado da mágica. Aqui é onde fica o site pronto para ser publicado em um servidor.

#### Coisas não tão importantes assim:

**_data** - Neste diretorio é possível armazenar dados úteis para a aplicação. Suporta extensoes .yml,  .yaml, .json e .csv. Os arquivos desse diretorio serão acessiveis através da variavel **site.data**

**_drafts** - Este diretorio serve para guardar posts que ainda não foram publicados (por isso estão sem data). Para ver uma prévia do site com os drafts publicados pode ser rodado o comando **jekyll serve** com o parametro **--drafts**

```command
 jekyll serve --drafts
 ```

