import React from 'react'

export default function User({ user }) {
  return (
    <>
      <div className="container my-5">

        <div className="card-body">

          <div className="text-center mb-4">
            <img src={user.image} alt={user.firstName} className="rounded-circle" width="100" />
            <h3 className="mt-3">{user.firstName} {user.lastName}</h3>
            <p className="text-muted">@{user.username} | {user.role}</p>
          </div>

          <h5 className="border-bottom pb-2">Personal Information</h5>
          <div className="row mb-3">
            <div className="col-md-4"><strong>Maiden Name:</strong> {user.maidenName}</div>
            <div className="col-md-4"><strong>Age:</strong> {user.age}</div>
            <div className="col-md-4"><strong>Gender:</strong> {user.gender}</div>
            <div className="col-md-4"><strong>Birth Date:</strong> {user.birthDate}</div>
            <div className="col-md-4"><strong>Height:</strong> {user.height} cm</div>
            <div className="col-md-4"><strong>Weight:</strong> {user.weight} kg</div>
            <div className="col-md-4"><strong>Eye Color:</strong> {user.eyeColor}</div>
            <div className="col-md-4"><strong>Hair:</strong> {user.hair.color}, {user.hair.type}</div>
            <div className="col-md-4"><strong>Blood Group:</strong> {user.bloodGroup}</div>
          </div>

          <h5 className="border-bottom pb-2">Contact</h5>
          <div className="row mb-3">
            <div className="col-md-6"><strong>Email:</strong> {user.email}</div>
            <div className="col-md-6"><strong>Phone:</strong> {user.phone}</div>
          </div>

          {user.address.address &&
            <>
              <h5 className="border-bottom pb-2">Address</h5>
              <div className="mb-3">
                <p>
                  <strong>{user.address.address},</strong><br />
                  {user.address.city}, {user.address.state} ({user.address.stateCode})<br />
                  {user.address.postalCode}, {user.address.country}<br />
                </p>
              </div>
            </>
          }

          {user.university &&
            <>
              <h5 className="border-bottom pb-2">Education</h5>
              <p>{user.university}</p>
            </>
          }

          {user.company.name &&
            <>
              <h5 className="border-bottom pb-2">Company</h5>
              <div className="mb-3">
                <p>
                  <strong>{user.company.name}</strong><br />
                  <strong>Title:</strong> {user.company.title} <br />
                  <strong>Department:</strong> {user.company.department} <br />
                  <strong>Address:</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.state} ({user.company.address.stateCode})<br />
                  <strong>Postal Code:</strong> {user.company.address.postalCode}, {user.company.address.country} <br />
                </p>
              </div>
            </>
          }

          {user.bank.cardNumber &&
            <>
              <h5 className="border-bottom pb-2">Bank</h5>
              <div className="row mb-3">
                <div className="col-md-6"><strong>Card Number:</strong> XXXXXXXXXXXX{user.bank.cardNumber.slice(-4)}</div>
                <div className="col-md-6"><strong>Card Type:</strong> {user.bank.cardType}</div>
                <div className="col-md-6"><strong>Expires:</strong> {user.bank.cardExpire}</div>
                <div className="col-md-6"><strong>Currency:</strong> {user.bank.currency}</div>
                <div className="col-md-6"><strong>IBAN:</strong> XXXXXXXXXXXX{user.bank.iban.slice(-4)}</div>
              </div>
            </>
          }

          {user.crypto.coin && <>
            <h5 className="border-bottom pb-2">Crypto Wallet</h5>
            <div className="row mb-3">
              <div className="col-md-6"><strong>Coin:</strong> {user.crypto.coin}</div>
              <div className="col-md-6"><strong>Network:</strong> {user.crypto.network}</div>
            </div>
          </>
          }

          <h5 className="border-bottom pb-2"></h5>
          <div className="row mb-3">
            <div className="col-md-6"><strong>SSN:</strong> {user.ssn}</div>
            <div className="col-md-6"><strong>EIN:</strong> {user.ein}</div>
          </div>
        </div>

      </div>
    </>
  );
};


