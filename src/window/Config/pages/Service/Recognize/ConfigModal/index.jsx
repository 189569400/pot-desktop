import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Spacer } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import * as buildinServices from '../../../../../../services/recognize';

export default function ConfigModal(props) {
    const { isOpen, onOpenChange, name, updateServiceList } = props;
    const { t } = useTranslation();
    console.log(name);
    console.log(buildinServices[name]);
    const ConfigComponent = buildinServices[name].Config;
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior='inside'
        >
            <ModalContent className='max-h-[80vh]'>
                {(onClose) => (
                    <>
                        <ModalHeader>{t(`services.recognize.${name}.title`)}</ModalHeader>
                        <ModalBody>
                            <ConfigComponent
                                updateServiceList={updateServiceList}
                                onClose={onClose}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color='danger'
                                variant='light'
                                onClick={onClose}
                            >
                                {t('common.cancel')}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
