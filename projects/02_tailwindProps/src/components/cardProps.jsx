import React from "react";

const Card = ({ name }) => {
    console.log("Received name prop:", name);   
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard
            image="https://i.ibb.co/r2zns1m/image-01.jpg"
            CardTitle="50+ Best creative website themes & templates"
            titleHref="/#"
            btnHref="/#"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="click me"
          />
          <SingleCard
            image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
            CardTitle="Creative Card Component designs graphic elements"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
            CardTitle="The ultimate UX and UI guide to card design"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://upload.wikimedia.org/wikipedia/en/c/c7/Todoroki_SJG_Spring_2021.png"
            CardTitle={name}
            CardDescription="shoto todoroki"
            Button="ice and fire"
          />
          <SingleCard
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/855f5ed1-1777-4b5b-a427-4d4e59881e37/deiv36t-4c4287fc-3fcf-4555-b696-55b34a4d77ae.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1NWY1ZWQxLTE3NzctNGI1Yi1hNDI3LTRkNGU1OTg4MWUzN1wvZGVpdjM2dC00YzQyODdmYy0zZmNmLTQ1NTUtYjY5Ni01NWIzNGE0ZDc3YWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H74r6A_rmvZF2i0Df0CO7tpdPH_N92-5xhvlAR4yNI8"
            CardTitle={name}
            CardDescription="shoto todoroki"
            Button="ice and fire"
          />
        </div>
      </div>
    </section>
  );
};

export default Card;

const SingleCard = ({

  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
