const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
    let nn = conn.getName(m.sender);
  } catch {
    m.reply('✦ Ocurrio un error.');
  }
};
handler.command = ['autoadmin', 'hokage'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
