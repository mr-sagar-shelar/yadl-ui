import type { Meta, StoryObj } from "@storybook/react";
import DatabaseInstanceForSAP from "../DatabaseInstanceForSAP";

const meta: Meta<typeof DatabaseInstanceForSAP> = { title: "Azure/Other/DatabaseInstanceForSAP", component: DatabaseInstanceForSAP };

export default meta;
type Story = StoryObj<typeof DatabaseInstanceForSAP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
