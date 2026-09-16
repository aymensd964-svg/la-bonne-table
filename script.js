function handleReserve(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  if(!name || !date || !time){
    alert('Please complete required fields.');
    return false;
  }
  alert('Thanks, ' + name + '! We received your reservation request for ' + date + ' at ' + time + '. We will contact you by email to confirm.');
  e.target.reset();
  return false;
}

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('reserveForm');
  if(form) form.addEventListener('submit', handleReserve);
});

// Image modal interactions
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalImg');
  const modalClose = document.getElementById('imgModalClose');
  function openModal(src, alt){
    if(!modal) return;
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    modalImg.src = '';
  }
  modalClose && modalClose.addEventListener('click', closeModal);
  modal && modal.addEventListener('click', function(e){ if(e.target===modal) closeModal(); });

  document.querySelectorAll('.thumbnail').forEach(img=>{
    img.addEventListener('click', ()=> openModal(img.dataset.full || img.src, img.alt));
  });
});