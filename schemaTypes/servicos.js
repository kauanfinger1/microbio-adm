import {defineField, defineType} from 'sanity'

export const servicos = defineType({
  name: 'servicos',
  title: 'Serviços',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
        name: 'descricao',
        title: 'Descrição',
        type: 'string',
    }),
    defineField ({
        name: 'simbolo',
        title: 'Símbolo de Exibição',
        type: 'image',
    }),
  ],
})