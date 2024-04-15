import { createClient } from '@supabase/supabase-js';

// Supabase client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SERVICE_KEY as string,
);

const addTestImage = async () => {
  try {
    await supabaseAdmin.from('images').insert([{
      name: 'undefined-study',
      href: 'https://github.com/undefined-study',
      userName: 'ahnanne',
      imageSrc: 'https://avatars.githubusercontent.com/u/105836469?s=200&v=4',
    }]);
  
    console.log('완료!');
  } catch (err) {
    console.error(err);
  }
};