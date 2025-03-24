import type { Meta, StoryObj } from "@storybook/react";
import Themeisle183 from "../Themeisle183";

const meta: Meta<typeof Themeisle183> = { title: "Themeisle/Themeisle183", component: Themeisle183 };

export default meta;
type Story = StoryObj<typeof Themeisle183>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
