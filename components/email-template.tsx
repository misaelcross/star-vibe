import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', backgroundColor: '#09090B', color: '#FAFAFA', padding: '32px' }}>
    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
      <a href="https://starvibe.space" style={{ display: 'inline-block' }}>
        <img src="https://i.postimg.cc/s2qwr7Yv/icon-star-logo.png" alt="Star Vibe Logo" width="64" height="64" style={{ margin: '0 auto' }} />
      </a>
    </div>
    <h2 style={{ color: '#FAFAFA' }}>Olá! 👋</h2>
    <p>Obrigado por se juntar à Star Vibe!</p>
    <p style={{ backgroundColor: '#1C1C1F', padding: '12px', borderRadius: '4px', margin: '24px 0', color: '#ff8468', fontSize: '14px', border: '1px solid #27272A' }}>
      ⚡ O Star Vibe ainda está em desenvolvimento e será lançado em breve! Você receberá atualizações exclusivas sobre nosso progresso e será um dos primeiros a saber quando a plataforma estiver disponível.
    </p>
    <p>Como agradecimento, aqui está seu cupom de 50% OFF:</p>
    <div style={{ backgroundColor: '#1C1C1F', padding: '12px', borderRadius: '4px', textAlign: 'center', margin: '24px 0', border: '1px solid #27272A' }}>
      <code style={{ fontSize: '24px', color: '#ff8468' }}>STARVIBE50</code>
    </div>
    <p>Use este cupom e tenha 1 ano de assinatura com desconto.</p>
    <p style={{ color: '#A1A1AA' }}>Atenciosamente,<br />Equipe <a href="https://starvibe.space" style={{ color: '#A1A1AA', textDecoration: 'underline' }}>Star Vibe</a></p>
  </div>
);