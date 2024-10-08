import { MelatPng } from "assets";
import {
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Image,
} from "components";
import { profileMessages } from "domains/profile/profile-details.messages";
import { globalMessages } from "i18n/global.messages";
import { useIntl } from "react-intl";

export function DefaultAccount() {
  const { formatMessage } = useIntl();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            icon="Edit"
            variant="text"
            className="h-[56px] w-auto rounded-M bg-background-lighter text-primary-main"
          >
            {formatMessage(profileMessages.backToDefaultAccount)}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {formatMessage(profileMessages.defaultAccount)}
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Image src={MelatPng} alt="bank-logo" />
                <p className="text-textAndIcon-darker text-labelXLarge">
                  ۰۶ ۲۹۶۰ ۰۰۰۰ ۰۰۱۰ ۰۳۲۴ ۲۰۰۰ ۰۱
                </p>
              </div>
              <p className="text-textAndIcon-light text-labelMedium">
                بانک ملی ایران
              </p>
            </div>
            <Checkbox className="rounded-full bg-primary-light" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Image src={MelatPng} alt="bank-logo" />
                <p className="text-textAndIcon-darker text-labelXLarge">
                  ۰۶ ۲۹۶۰ ۰۰۰۰ ۰۰۱۰ ۰۳۲۴ ۲۰۰۰ ۰۱
                </p>
              </div>
              <p className="text-textAndIcon-light text-labelMedium">
                بانک ملی ایران
              </p>
            </div>
            <Checkbox className="rounded-full bg-primary-light" />
          </div>
          <Button
            icon="Plus-Square"
            variant="text"
            className="h-[56px] w-[196px] rounded-M"
          >
            {formatMessage(profileMessages.openNewAccount)}
          </Button>
          <DialogFooter className="mt-6 flex gap-4">
            <DialogClose asChild>
              <Button fullWidth variant="outline">
                {formatMessage(globalMessages.cancel)}
              </Button>
            </DialogClose>
            <Button fullWidth>
              {formatMessage(profileMessages.addAccount)}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
