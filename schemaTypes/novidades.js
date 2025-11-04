import {defineField, defineType} from 'sanity'

export const novidades = defineType({
  name: 'novidades',
  title: 'Novidades',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
        name: 'subtitulo',
        title: 'Subtítulo',
        type: 'string',
    }),
    defineField ({
        name: 'descricao',
        title: 'Descrição',
        type: 'string',
    }),
    defineField ({
        name: 'imagem',
        title: 'Capa Notícia',
        type: 'image',
    }),
    defineField ({
        name: 'link',
        title: 'Link da Notícia',
        type: 'url',
    }),
    defineField ({
        name: 'publicar',
        title: 'Publicar?', 
        type: 'boolean',
        initialValue: false,
    }),
    ],
})