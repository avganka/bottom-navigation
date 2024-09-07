import { Container } from '@components/Container/Container';
import { Page } from '@components/Page';
import { LOREM } from '@constants/lorem';

function App() {
  return (
    <Page actions={['share', 'pageUp', 'likes', 'comments']}>
      <Container>
        <div>
          {Array(20)
            .fill(LOREM)
            .map((lorem, i) => (
              <p key={i}>{lorem}</p>
            ))}
        </div>
      </Container>
    </Page>
  );
}

export default App;
