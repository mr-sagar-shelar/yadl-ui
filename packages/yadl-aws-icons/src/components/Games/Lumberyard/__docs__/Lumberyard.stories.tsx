import type { Meta, StoryObj } from "@storybook/react";
import Lumberyard from "../Lumberyard";

const meta: Meta<typeof Lumberyard> = { title: "AWS/Games/Lumberyard", component: Lumberyard };

export default meta;
type Story = StoryObj<typeof Lumberyard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
