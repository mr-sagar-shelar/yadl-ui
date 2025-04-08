import type { Meta, StoryObj } from "@storybook/react";
import FTP from "../FTP";

const meta: Meta<typeof FTP> = { title: "Azure/General/FTP", component: FTP };

export default meta;
type Story = StoryObj<typeof FTP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
