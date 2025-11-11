import {defineField, defineType} from 'sanity'

export const carrocel_formulario = defineType({
  name: 'carrocel_formulario',
  title: 'Carrocel Formulario',
  type: 'document',
  fields: [
    defineField ({
        name: 'imagem',
        title: 'Foto do Carrocel',
        type: 'image',
    }),
    defineField({
      name: 'alt',
      title: 'descreva a imagem',
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