import { client, checkError } from './client';

export async function fetchGroceries() {
  const response = await client.from('grocery-list').select();
  return checkError(response);
}

export async function fetchById(id) {
  const response = await client
    .from('grocery-list')
    .select()
    .match({ id })
    .single();
  return checkError(response);
}

export async function createItem(item) {
  const resp = await client
    .from('grocery-list')
    .insert([
      { item: item, user_id: client.auth.user().id, is_complete: false },
    ]);
  return checkError(resp);
}

export async function updateItem({ id, item, is_complete }) {
  const response = await client
    .from('grocery-list')
    .update({ is_complete, item })
    .eq('id', id);
  return checkError(response);
}

// export async function editItem(id, item) {
//   const response = await client
//     .from('grocery-list')
//     .update({ item })
//     .eq('id', id);
//   return checkError(response);
// }

export async function deleteById(id) {
  const response = await client.from('grocery-list').delete().match({ id });
  return checkError(response);
}
