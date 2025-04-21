

const notes = [
   {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    createdAt: '2023-10-01T12:00:00Z',

   },

{
 id: '2a1b3c4d-5678-9101-1121-314151617181',
 title: 'Vestibulum ante ipsum primis',
 content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-02T12:00:00Z',
},
{
 id: '3b2c4d5e-6789-1011-1213-415161718192',
 title: 'Curabitur non nulla sit amet',
 content: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-03T12:00:00Z',
},
{
 id: '4c3d5e6f-7890-1112-1314-516171819203',
 title: 'Praesent sapien massa',
 content: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-04T12:00:00Z',
},
{
 id: '5d4e6f7g-8901-1213-1415-617181920314',
 title: 'Donec sollicitudin molestie',
 content: 'Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-05T12:00:00Z',
},
{
 id: '6e5f7g8h-9012-1314-1516-718192031425',
 title: 'Mauris blandit aliquet elit',
 content: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-06T12:00:00Z',
},
{
 id: '7f6g8h9i-0123-1415-1617-819203142536',
 title: 'Nulla porttitor accumsan',
 content: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-07T12:00:00Z',
},
{
 id: '8g7h9i0j-1234-1516-1718-920314253647',
 title: 'Sed porttitor lectus nibh',
 content: 'Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-08T12:00:00Z',
},
{
 id: '9h8i0j1k-2345-1617-1819-031425364758',
 title: 'Quisque velit nisi',
 content: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-09T12:00:00Z',
},
{
 id: '0i9j1k2l-3456-1718-1920-142536475869',
 title: 'Pellentesque in ipsum id',
 content: 'Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-10T12:00:00Z',
},
{
 id: '1j0k2l3m-4567-1819-2021-253647586970',
 title: 'Vivamus suscipit tortor',
 content: 'Vivamus suscipit tortor eget felis porttitor volutpat.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-11T12:00:00Z',
},
{
 id: '2k1l3m4n-5678-1920-2122-364758697081',
 title: 'Cras ultricies ligula',
 content: 'Cras ultricies ligula sed magna dictum porta.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-12T12:00:00Z',
},
{
 id: '3l2m4n5o-6789-2021-2223-475869708192',
 title: 'Donec rutrum congue',
 content: 'Donec rutrum congue leo eget malesuada.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-13T12:00:00Z',
},
{
 id: '4m3n5o6p-7890-2122-2324-586970819203',
 title: 'Mauris blandit aliquet',
 content: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-14T12:00:00Z',
},
{
 id: '5n4o6p7q-8901-2223-2425-697081920314',
 title: 'Curabitur aliquet quam',
 content: 'Curabitur aliquet quam id dui posuere blandit.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-15T12:00:00Z',
},
{
 id: '6o5p7q8r-9012-2324-2526-708192031425',
 title: 'Nulla quis lorem',
 content: 'Nulla quis lorem ut libero malesuada feugiat.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-16T12:00:00Z',
},
{
 id: '7p6q8r9s-0123-2425-2627-819203142536',
 title: 'Sed porttitor lectus',
 content: 'Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-17T12:00:00Z',
},
{
 id: '8q7r9s0t-1234-2526-2728-920314253647',
 title: 'Quisque velit nisi',
 content: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-18T12:00:00Z',
},
{
 id: '9r8s0t1u-2345-2627-2829-031425364758',
 title: 'Pellentesque in ipsum',
 content: 'Pellentesque in ipsum id orci porta dapibus.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-19T12:00:00Z',
},
{
 id: '0s9t1u2v-3456-2728-2930-142536475869',
 title: 'Vivamus suscipit tortor',
 content: 'Vivamus suscipit tortor eget felis porttitor volutpat.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-20T12:00:00Z',
},
{
 id: '1t0u2v3w-4567-2829-3031-253647586970',
 title: 'Cras ultricies ligula',
 content: 'Cras ultricies ligula sed magna dictum porta.',
 image: 'https://via.placeholder.com/150',
 createdAt: '2023-10-21T12:00:00Z',
}

]


export default notes;       