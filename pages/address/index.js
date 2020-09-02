import Head from "next/head";
import AddressPicker from "../../components/address-picker";
import { useRouter } from "next/router";

function Address({ stores }) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Doordash - Enter Address</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="round">
            <AddressPicker />
          </div>
          <div className="back" onClick={() => router.back()}>
            Cancel
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding-top: 20px;
        }
        .round {
          border: 1px solid lightgray;
          border-radius: 1000px;
        }
        .back {
          margin-top: 20px;
          font-size: 14px;
          font-family: Arial;
          color: rgb(73, 73, 73);
        }
      `}</style>
    </div>
  );
}

export default Address;
