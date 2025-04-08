import type { Meta, StoryObj } from "@storybook/react";
import CentralServiceInstanceForSAP from "../CentralServiceInstanceForSAP";

const meta: Meta<typeof CentralServiceInstanceForSAP> = { title: "Azure/Other/CentralServiceInstanceForSAP", component: CentralServiceInstanceForSAP };

export default meta;
type Story = StoryObj<typeof CentralServiceInstanceForSAP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
