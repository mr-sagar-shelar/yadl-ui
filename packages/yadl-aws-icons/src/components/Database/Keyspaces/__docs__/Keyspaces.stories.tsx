import type { Meta, StoryObj } from "@storybook/react";
import Keyspaces from "../Keyspaces";

const meta: Meta<typeof Keyspaces> = { title: "AWS/Database/Keyspaces", component: Keyspaces };

export default meta;
type Story = StoryObj<typeof Keyspaces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
