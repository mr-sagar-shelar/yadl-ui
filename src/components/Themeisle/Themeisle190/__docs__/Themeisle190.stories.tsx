import type { Meta, StoryObj } from "@storybook/react";
import Themeisle190 from "../Themeisle190";

const meta: Meta<typeof Themeisle190> = { title: "Themeisle/Themeisle190", component: Themeisle190 };

export default meta;
type Story = StoryObj<typeof Themeisle190>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
