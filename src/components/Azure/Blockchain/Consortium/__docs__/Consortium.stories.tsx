import type { Meta, StoryObj } from "@storybook/react";
import Consortium from "../Consortium";

const meta: Meta<typeof Consortium> = { title: "Azure/Blockchain/Consortium", component: Consortium };

export default meta;
type Story = StoryObj<typeof Consortium>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
