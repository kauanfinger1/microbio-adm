import {defineField, defineType} from 'sanity'

export const carrocel_inicio = defineType({
  name: 'carrocel_inicio',
  title: 'Carrocel inicio',
  type: 'document',
  fields: [
    defineField ({
        name: 'imagem',
        title: 'Foto do Carrocel',
        type: 'image',
    }),
    defineField({
      name: 'texto',
      title: 'Texto da tela',
      type: 'string',
    }),
    defineField ({
        name: 'publicar',
        title: 'Publicar?', 
        type: 'boolean',
        initialValue: false,
    }),
    ],
})