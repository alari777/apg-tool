import Head from 'next/head';
import { FC, useState, FormEvent } from 'react';

interface FormData {
  apgParameters?: string;
}

const HomePage: FC = () => {
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [isApg, setIsApg] = useState<boolean>(false);
  const [apgOutput, setApgOutput] = useState<string[]>([]);
  const [apgParameters, setApgParameters] = useState<string>('');

  const generateAPG = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setClassSpinner(true);
    setIsApg(false);
    try {
      const response = await fetch(`/api/v1/apg/apg?params=${apgParameters}`, {
        method: 'GET',
      });
      if (response.status === 200) {
        const json = await response.json();
        const { data } = json;
        setIsApg(true);
        setApgOutput(data);
      }
    } catch (err) {}
    setClassSpinner(false);
  };

  return (
    <>
      <Head>
        <title>APG tool project: home page</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='main'>
        <form
          onSubmit={generateAPG}
          name='generateAPG'
          style={{ marginBottom: '25px' }}
        >
          <div>
            <div className='form-row'>
              <div
                className='input-group mb-3'
                style={{ marginBottom: '25px' }}
              >
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text'
                    id='inputGroup-sizing-default'
                  >
                    Additional parameters
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Default'
                  aria-describedby='inputGroup-sizing-default'
                  value={apgParameters}
                  id='apgParameters'
                  name='apgParameters'
                  onChange={(e) => setApgParameters(e.target.value)}
                />
              </div>
              <div className='col-md-9' style={{ marginBottom: '25px' }}>
                <button type='submit' className='btn btn-primary mt-3'>
                  {classSpinner && (
                    <span
                      className='spinner-border spinner-border-sm'
                      role='status'
                      aria-hidden='true'
                    ></span>
                  )}
                  APG tool
                </button>
              </div>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {apgOutput &&
                    apgOutput.map((apgValue: string, index: number) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{apgValue}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default HomePage;
