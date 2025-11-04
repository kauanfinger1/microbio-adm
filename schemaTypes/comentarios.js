import {defineField, defineType} from 'sanity'

export const comentarios = defineType({
  name: 'comentarios',
  title: 'Comentários',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
        name: 'rating',
        title: 'Avaliação (1 a 5 estrelas)',
        type: 'number',
        validation: (Rule) => Rule.min(1).max(5).required(),
    }),
    defineField ({
        name: 'comment',
        title: 'Descrição',
        type: 'string',
    }),
  ],
})