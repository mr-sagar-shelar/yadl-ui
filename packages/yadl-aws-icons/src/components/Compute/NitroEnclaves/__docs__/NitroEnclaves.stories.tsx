import type { Meta, StoryObj } from "@storybook/react";
import NitroEnclaves from "../NitroEnclaves";

const meta: Meta<typeof NitroEnclaves> = { title: "AWS/Compute/NitroEnclaves", component: NitroEnclaves };

export default meta;
type Story = StoryObj<typeof NitroEnclaves>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
