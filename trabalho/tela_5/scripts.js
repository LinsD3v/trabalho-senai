fetch('../members.json')
  .then(res => res.json())
  .then(members => {
    const container = document.getElementById('member-container');
    members.forEach(member => {
      const div = document.createElement('div');
      div.className = 'member';
      div.innerHTML = `
        <img src="${member.image_path}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.funcao}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(() => {
    document.getElementById('member-container').innerHTML = '<p>Falha ao carregar membros.</p>';
  });
