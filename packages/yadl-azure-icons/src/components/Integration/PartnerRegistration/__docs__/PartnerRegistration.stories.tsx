import type { Meta, StoryObj } from "@storybook/react";
import PartnerRegistration from "../PartnerRegistration";

const meta: Meta<typeof PartnerRegistration> = { title: "Azure/Integration/PartnerRegistration", component: PartnerRegistration };

export default meta;
type Story = StoryObj<typeof PartnerRegistration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
