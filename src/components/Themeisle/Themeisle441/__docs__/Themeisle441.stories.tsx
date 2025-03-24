import type { Meta, StoryObj } from "@storybook/react";
import Themeisle441 from "../Themeisle441";

const meta: Meta<typeof Themeisle441> = { title: "Themeisle/Themeisle441", component: Themeisle441 };

export default meta;
type Story = StoryObj<typeof Themeisle441>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
