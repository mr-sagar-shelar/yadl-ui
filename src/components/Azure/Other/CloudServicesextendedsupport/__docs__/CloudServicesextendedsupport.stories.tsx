import type { Meta, StoryObj } from "@storybook/react";
import CloudServicesextendedsupport from "../CloudServicesextendedsupport";

const meta: Meta<typeof CloudServicesextendedsupport> = { title: "Azure/Other/CloudServicesextendedsupport", component: CloudServicesextendedsupport };

export default meta;
type Story = StoryObj<typeof CloudServicesextendedsupport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
