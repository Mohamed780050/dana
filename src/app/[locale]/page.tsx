import Header from "@/components/Header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("landingPage");
  return (
    <>
      <header>
        <title>QR-Dine Restaurant System Landing Page</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </header>
      <div className="group/design-root relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex w-full max-w-5xl flex-1 flex-col">
              <Header />
              <main className="flex flex-col gap-10 px-4 py-10 md:gap-16 md:px-10 lg:gap-20">
                <div className="@container">
                  <div className="flex flex-col gap-10 @[864px]:flex-row @[864px]:items-center">
                    <div className="flex flex-col gap-6 text-left @[864px]:w-1/2">
                      <div className="flex flex-col gap-4">
                        <h1 className="text-4xl leading-tight font-black tracking-[-0.033em] text-gray-900 @[480px]:text-5xl @[480px]:leading-tight @[480px]:font-black @[480px]:tracking-[-0.033em] dark:text-white">
                          {t("PageTitle")}
                        </h1>
                        <p className="text-base leading-normal font-normal text-gray-600 @[480px]:text-lg dark:text-gray-300">
                          {t("Pra")}
                        </p>
                      </div>
                    </div>
                    <div className="w-full @[864px]:w-1/2">
                      <img
                        className="h-auto w-full rounded-xl object-cover shadow-lg"
                        data-alt="A smartphone displaying a digital restaurant menu on a table next to a plate of food."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcbYhJLab2YG0LwpHgr3hxtHUk0HI4zJ--sfa2-1wLEgIq0x3eLfNUKXryZGFWvsSpjsYRdD1VYR5H81Jw9fhMSwkHY5DuPFu1PX3z7fRc852l0g3N-KKWnKQcf3g_KP3IjDvPVZJfvkZKrmIzRMQAyfLBxQFHKSqhi1iD56D56DLhrn6-mZZNywIi3UGtgTPDr1zc88PsDvOH98PC0ZjHIpODe_pMIOJ36zkovS8ywA9QiORdJ8QGOkNp_g0WuIAz-L3VxW1i6PQ"
                      />
                    </div>
                  </div>
                </div>
                <div className="@container flex flex-col gap-10 py-10">
                  <h2 className="tracking-light max-w-[720px] text-3xl leading-tight font-bold text-gray-900 @[480px]:text-4xl @[480px]:leading-tight @[480px]:font-black @[480px]:tracking-[-0.033em] dark:text-white">
                    {t("serviceTitle")}
                  </h2>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 p-0">
                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        qr_code
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-white">
                          {t("QRTitle")}
                        </h3>
                        <p className="text-sm leading-normal font-normal text-gray-600 dark:text-gray-300">
                          {t("QRDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        dashboard
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-white">
                          {t("DashboardTitle")}
                        </h3>
                        <p className="text-sm leading-normal font-normal text-gray-600 dark:text-gray-300">
                          {t("DashboardDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        credit_card
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-white">
                          {t("PaymentTitle")}
                        </h3>
                        <p className="text-sm leading-normal font-normal text-gray-600 dark:text-gray-300">
                          {t("PaymentDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        smartphone
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-white">
                          {t("SmartPhoneTitle")}
                        </h3>
                        <p className="text-sm leading-normal font-normal text-gray-600 dark:text-gray-300">
                          {t("SmartPhoneDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        bolt
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-white">
                          {t("BoltTitle")}
                        </h3>
                        <p className="text-sm leading-normal font-normal text-gray-600 dark:text-gray-300">
                          {t("BoltDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-10">
                  <h2 className="pb-3 text-2xl leading-tight font-bold tracking-[-0.015em] text-gray-900 dark:text-white"></h2>
                  <p className="text-base leading-relaxed font-normal text-gray-600 dark:text-gray-300">
                    {t("OurMissionDesc")}
                  </p>
                </div>
              </main>
              <footer className="mt-10 border-t border-gray-200 px-10 py-8 dark:border-gray-700">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("CopyRight")}
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
