function covertAgenteToLi(agente) {
  

    return `
      <li class="agente">
        <span class="name">${agente.name}</span>
        <div class="detail">
      <ol>
          <span class="roles">${agente.roleNames}</span>
          <img src="${agente.icon}" alt="${agente.name}" class="icon">
          </ol>
          
          <img src="${agente.photo}" alt="${agente.name}">
        </div>
      </li>
    `;
  }
  
  const agentelist = document.getElementById('agentelist');
  
  agtApi.getAgents().then((agentes = []) => {
    const newHtml = agentes.map(covertAgenteToLi).join('');
    agentelist.innerHTML = newHtml;
  });
  