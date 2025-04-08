import type { Meta, StoryObj } from "@storybook/react";
import ClientVPN from "../ClientVPN";

const meta: Meta<typeof ClientVPN> = { title: "AWS/NetworkingContentDelivery/ClientVPN", component: ClientVPN };

export default meta;
type Story = StoryObj<typeof ClientVPN>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
